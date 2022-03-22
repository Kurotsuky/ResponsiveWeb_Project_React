import { Link } from "react-router-dom";

export default function Pagination(props) {
    const getPages = () => {
        const result = [];
        for (let i = 0; i < props.total; i++) {
            let page = i + 1;
            result.push(
                <Link
                    to="#"
                    onClick={() => props.onChange(page)}
                    className={props.page === page ? 'active' : ''}
                >
                    {page}
                </Link>
            );
        }
        return result;
    }

    return (
        <section className="pagination-container">
            <div className="pagination">

                {props.page !== 1
                    ? <Link to="#Article-list">
                        <button
                            onClick={() => props.onChange(props.page - 1)}>
                            <img src="/ResponsiveWeb_Project_React/images/adelante.png" alt="" />
                        </button>
                    </Link>
                    : ""
                }

                <span>Página {props.page} de {props.total}:</span>
                <span>{getPages()}</span>

                {props.page !== props.total
                    ? <Link to="#Article-list">
                        <button
                            onClick={() => props.onChange(props.page + 1)}>
                            <img src="/ResponsiveWeb_Project_React/images/adelante.png" alt="" />
                        </button>
                    </Link>
                    : ""
                }
            </div>
        </section>
    );
}