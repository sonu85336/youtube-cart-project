import list from '../data'
import '../styling/amazon.css'
import Cards from './Cards'
const Amazon =(props)=>{
    return (  
     <section>
        {list.map((item)=>(
            <Cards item={item} handleClick={props.handleClick}  key={item.id} />
        ))}
     </section>
    )
}
export default Amazon;