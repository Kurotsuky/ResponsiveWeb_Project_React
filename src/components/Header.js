export default function Header(props) {
    let existCategories = props.categories != null;
    let categories = existCategories ? props.categories : [];

    return (
        <>
            <div className='header-title'>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
            {existCategories
                ? <ul className='header-categories'>
                    {categories.map((categorie) => {
                        return (
                            <li><a href="#"><span>{categorie}</span></a></li>
                        );
                    })}
                </ul>
                : ""
            }
        </>
    );
}