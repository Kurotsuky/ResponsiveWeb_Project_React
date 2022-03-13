export default function Article(props) {
    return (
        <article>
            <div className='article-content'>
                <a href="#">
                    <img src={props.img} alt="" />
                    <h2>{props.name}</h2>
                </a>
                <p>{props.description}</p>

                {props.muscles
                    ? <p><strong>Musculos trabajados:</strong> {props.muscles}</p>
                    : ""
                }
            </div>
        </article>
    );
}