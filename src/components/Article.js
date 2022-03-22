import { Link } from "react-router-dom";

export default function Article(props) {
    return (
        <article>
            <div className='article-content'>
                <Link to="#">
                    <img src={props.img} alt="" />
                    <h2>{props.name}</h2>
                </Link>
                <p>{props.description}</p>

                {props.muscles
                    ? <p><strong>Musculos trabajados:</strong> {props.muscles}</p>
                    : ""
                }
            </div>
        </article>
    );
}