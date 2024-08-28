import './Card.css';

function Card(props) {
    return (
      <>
        <div className='card'>
            <img className='card-imagem' src={props.imagem} />
        </div>
      </>
    );
}

export default Card;