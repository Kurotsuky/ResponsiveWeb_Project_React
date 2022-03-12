export default function Pagination(props) {
    const getPages = () => {
        const result = [];
        for (let i = 0; i < props.total; i++) {
            let page = i + 1;
            result.push(
                <a
                    href="#articles-list"
                    onClick={() => props.onChange(page)}
                    className={props.page === page ? 'active' : ''}
                >
                    {page}
                </a>
            );
        }
        return result;
    }

    return (
        <section className="pagination-container">
            <div className="pagination">
                <span>Página {props.page} de {props.total}:</span>
                <span>{getPages()}</span>
            </div>
        </section>
    );
}