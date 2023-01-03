import './card.styles.css';

const Card = ({ monster}) => {
    const { id, name, username, company } = monster;
    return (
        <div key={id} className='card-container'>
            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set4&size=180x180`} />
            <h1>{name}</h1>
            <h3>{username}</h3>
            <p> {company.bs}</p>
        </div>
    )
}



// class Card extends Component{
//     render(){
//         const {id, name , username, company} = this.props.monster;
//         return(
//             <div key={id} className='card-container'>
//                 <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set4&size=180x180`} />
//                 <h1 >{name}</h1>
//                 <h3>{username}</h3>
//                 <p>{company.bs}</p>
//             </div>
//         )
//     }
// }
export default Card;