import { useState } from 'react';
import Pagination from '../components/Pagination';
import databaseJson from '../database.json';
import Article from './Article';


export default function ArticlesList(props) {
    const [actualPage, setActualPage] = useState(1);
    const TOTAL_BY_PAGES = 4;

    let data = databaseJson;

    const filterData = (data) => {
        if (props.type == "all") { return data }

        return data.filter((object) => {
            return object.type == props.type;
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

    dataLoad();


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
                onChange={(page) => { setActualPage(page) }}
            />
        </section >
    );
}