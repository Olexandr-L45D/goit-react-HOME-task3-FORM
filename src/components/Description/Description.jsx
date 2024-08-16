// Description
import css from "./Description.module.css"

export default function Description() {
    return (
        <div className={css.container}>
            <div className={css.item}>
                <h1 className={css.title}>Hello FORM</h1>
                <h2 className={css.itemText}>Please input and submit</h2>
                <p className={css.itemText}> </p>
            </div>
        </div>
    );
}