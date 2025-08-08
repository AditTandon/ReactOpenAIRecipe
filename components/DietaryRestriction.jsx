export default function DietaryRestriction( {dietaryRestrictions, handleCheckbox} )  {

    const checkBoxes = dietaryRestrictions.map((restriction) => {
        return (
            <label key={restriction} htmlFor={restriction}>
                <input type="checkbox" id={restriction} name={restriction} value={restriction} onChange={handleCheckbox} />
                {restriction}
            </label>
        )
    })

    return (
        <section className="dietary-restrictions">
            <fieldset>
                <legend>Dietary Restrictions</legend>
                <div className="checkbox-grid">
                    {checkBoxes}
                </div>
            </fieldset>
        </section>
    )
}