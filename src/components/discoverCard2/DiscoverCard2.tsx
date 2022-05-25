import { Link } from "react-router-dom";
interface Props {
    title: String,
    paragraph: String,
    paragraph2: String,
}
export default function DiscoverCard2(props: Props) {
    return (
        <>
            <div className='discover2-background'>
                <div className="discover2-container">
                    <div className='discover2-container container'>
                        <div className='discover2Banner'>
                            <div className="discover2Banner-title">
                            <h3>{props.title}</h3>
                            </div>
                            <div className="discover2Banner-paragraph">
                                <p>{props.paragraph}</p>
                                <div className="discover2Banner-paragraph2">
                                    <p>{props.paragraph2}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}