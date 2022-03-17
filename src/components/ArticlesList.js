import { useEffect, useState } from 'react';
import Pagination from '../components/Pagination';
import databaseJson from '../database.json';
import Article from './Article';


export default function ArticlesList(props) {
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

    dataLoad();

    useEffect(() => {
        if (data.length === 0) {
            setActualPage(0);
        }
    }, [data.length]);

    return (
        <section className='articles-list' id='articles-list'>
            <h2>{props.title}</h2>

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