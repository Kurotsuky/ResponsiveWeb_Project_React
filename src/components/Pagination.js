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
                    ? <button
                        onClick={() => props.onChange(props.page - 1)}>
                        <img src="images/adelante.png" alt="" />
                    </button>
                    : ""
                }

                <span>Página {props.page} de {props.total}:</span>
                <span>{getPages()}</span>

                {props.page !== props.total
                    ? <button
                        onClick={() => props.onChange(props.page + 1)}>
                        <img src="images/adelante.png" alt="" />
                    </button>
                    : ""
                }
            </div>
        </section>
    );
}