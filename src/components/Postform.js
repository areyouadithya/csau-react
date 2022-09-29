import {ImCross} from 'react-icons/im';
import {FaCheck} from 'react-icons/fa';

function Postform()
{
    return(
        <div className="backdrop">
            <div className="form">
                <div className="formtitlecard">
                    <p id="formtitle">Add New Posts</p>
                </div>
                <div className="formFont">
                    Username:
                    <input type="text" className="formInput" placeholder="Enter Username"></input>
                </div>
                <div className="formFont">
                    Location:
                    <input type="text" className="formInput" placeholder="Enter location"></input>
                </div>
                <div className="formFont">
                    Post Type:
                    <select className="formInput">
                        <option value="image">Image</option>
                        <option value="text">Text</option>
                    </select>
                </div>
                <div className="formFont">
                    Img Link:
                    <input type="text" className="formInput" placeholder="Enter Image link"></input>
                </div>
                <div className="rabtn">
                    <div>
                        <ImCross />
                    </div>
                    <div>
                        <FaCheck />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Postform;