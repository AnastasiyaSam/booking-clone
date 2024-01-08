import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './reserve.css'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import useFetch from '../../hooks/useFetch';


const Reserve = ({ setOpen, hotelId }) => {
    const { data, loading, error } = useFetch(`localhost:8800/api/hotels/room/${hotelId}`)
    console.log("called")
    console.log(data)
    return (
        <div className="reserve">
            <div className="rContainer">
                <FontAwesomeIcon icon={faCircleXmark} className='rClose' onClick={() => setOpen(false)} />
                <span>Select your rooms:</span>
                {data.map(item => {
                    <div className="rItem">
                        <div className="rItemInfo">
                            <div className="rTitle">{item.title}</div>
                            <div className="rDesc">{item.desc}</div>
                            <div className="rMax"><b>
                                {item.maxPeople}
                            </b>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Reserve;