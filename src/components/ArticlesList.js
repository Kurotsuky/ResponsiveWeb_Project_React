import { useEffect, useState } from 'react';
import Pagination from '../components/Pagination';
import databaseJson from '../database.json';
import Article from './Article';


export default function ArticlesList(props) {
    const [activeSorter, setActiveSorter] = useState("recientes");
    const [actualPage, setActualPage] = useState(1);
    const TOTAL_BY_PAGES = 4;
    const activeCategories = props.activeCategories;

    let data = databaseJson;

    const filterData = (data) => {
        if (props.type == "all") { return data }

        data = data.filter((object) => {
            return object.type == props.type;
        });

        if (!activeCategories || activeCategories.length === 0) {
            return data;
        }

        return data.filter((object) => {
            let isActive = object.category.map((category) => {
                return activeCategories.includes(category);
            });
            return isActive.includes(true);
        });
    }

    const dataLoad = () => {
        data = filterData(data);
        data = sortDataBySelect();
        data = data.slice(
            (actualPage - 1) * TOTAL_BY_PAGES,
            actualPage * TOTAL_BY_PAGES
        );
    }

    const getTotalPage = () => {
        let dataLength = filterData(databaseJson).length;
        return Math.ceil(dataLength / TOTAL_BY_PAGES);
    }

    const nextPage = (page) => {
        const totalPage = getTotalPage();
        if (page > totalPage || page < 1) {
            return;
        }
        setActualPage(page);
        window.location.href = "#articles-list";
    }

    const changeActiveSorter = () => {
        let sorter = document.getElementById("sorter");
        let options = ["recientes", "antiguos", "mejores"];
        let optionSelected = options.indexOf(sorter.value);

        setActiveSorter(options[optionSelected]);
    }

    const sortDataBySelect = () => {
        return data.sort((a, b) => {
            if (activeSorter === "recientes"
                || activeSorter === "antiguos") {
                return sortByDate(a, b);
            }
            return sortByScore(a, b);
        });
    }

    const sortByDate = (a, b) => {
        const aDateArray = a.date.split("/");
        const bDateArray = b.date.split("/");

        if (aDateArray === null && bDateArray === null) return 0;

        for (let i = 2; i >= 0; i--) {
            if (aDateArray[i] === bDateArray[i]) {
                continue;
            }
            return (
                aDateArray[i].toString().localeCompare(bDateArray[i].toString(), "en", {
                    numeric: true,
                }) * (activeSorter === "antiguos" ? 1 : -1)
            );
        }
    }

    const sortByScore = (a, b) => {
        return (
            a.valoration.toString().localeCompare(b.valoration.toString(), "en", {
                numeric: true,
            }) * (activeSorter === "antiguos" ? 1 : -1)
        );
    }

    dataLoad();

    useEffect(() => {
        if (data.length === 0) {
            setActualPage(0);
        }
    }, [data.length]);

    return (
        <section className='articles-list' id='articles-list'>
            <div className='articles-header'>
                <h2>{props.title}</h2>
                <select id='sorter' onChange={changeActiveSorter}>
                    <option value="recientes" selected>Recientes</option>
                    <option value="antiguos">Más Antiguos</option>
                    <option value="mejores">Mejores</option>
                </select>
            </div>

            {data.map((object) => {
                return (
                    <Article
                        name={object.name}
                        description={object.description}
                        img={object.img}
                        muscles={object.muscles}
                    />
                );
            })}

            <Pagination
                page={actualPage}
                total={getTotalPage()}
                onChange={(page) => { nextPage(page) }}
            />
        </section >
    );
}