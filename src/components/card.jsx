import './Card.css'

let Card = (props) => {
    let color_div = {
        backgroundColor : props.colorcode
    }
   
    let style_p = {
        color : props.colorcode
    }

    return (
        <div className="card_div">

            <div style={color_div} className="color_div "></div>

            <p className='color_code'>{props.colorcode}</p>

            <p style={style_p} className='style_p'>{props.color}</p>

        </div>
    )
}

export default Card;