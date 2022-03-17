export default function Header(props) {
    let existCategories = props.categories != null;
    let categories = existCategories ? props.categories : [];

    const toggleCategory = (category) => {
        lookUpCategoryActive(category);

        category = category.toLowerCase();
        props.setCategories((prevValues) => {
            let index = prevValues.indexOf(category);

            if (index !== -1) {
                return prevValues.filter((value) => {
                    return value !== category;
                });
            }
            return [...prevValues, category];

        });
    }

    const lookUpCategoryActive = (id) => {
        let category = document.getElementById(id);
        category.classList.toggle('active');
    }

    const updateCategories = (prevValues, category) => {
        let index = prevValues.indexOf(category);
        index !== -1
            ? prevValues.splice(index, 1)
            : prevValues.push(category);
        return prevValues;
    }

    return (
        <>
            <div className='header-title'>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
            {existCategories
                ? <ul className='header-categories'>
                    {categories.map((category) => {
                        return (
                            <li><button
                                id={category}
                                href="#"
                                onClick={() => toggleCategory(category)}
                            >
                                <span>{category}</span>
                            </button></li>
                        );
                    })}
                </ul>
                : ""
            }
        </>
    );
}