import {RiDeleteBinFill} from 'react-icons/ri';
import {BsPencilFill} from 'react-icons/bs';

function Card() {
    return (
        <div className="card">
            <img className="card-img" src="https://images.unsplash.com/photo-1663915943941-9e3b66fe1e7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="image" />
            <div className="card-body">
                <img src="./panda-avatar.png" alt="User" id="user" />
                <div className="card-desc">
                    <div className="card-title">Gautam</div>
                    <div className="card-text">Somewhere in CEG</div>
                </div>
                <div className="icons">
                    <RiDeleteBinFill id="trash" />
                    <BsPencilFill id="edit" />
                </div>
            </div>
        </div>
    )
}

export default Card;