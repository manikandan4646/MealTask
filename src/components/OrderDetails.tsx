import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const OrderDetails = () => {
    const { checkoutInfo } = useSelector((state:any) => state.ReducerState);
    const { mealData } = useSelector((state:any) => state.ReducerState);

    const navigate = useNavigate();
    window.onload = () =>  navigate("/");

    return (
        <div className='order-details-container'>
            <div className="img-bg" style={{padding: "20px", backgroundImage:`url(${mealData?.strMealThumb})`}}></div>
            <div style={{position: 'absolute', top: "100px", color: 'white'}}>
                <div className="centering purchase-header">Your meal has been purchased</div>
                <div className="mb-15"><span className="details-heading">Meal: </span><span className="meal-data">{mealData?.strMeal}</span></div>
                <div className="mb-15"><span className="details-heading">Category: </span><span className="meal-data">{mealData?.strCategory}</span></div>
                <div className="mb-15"><span className="details-heading">Name: </span><span className="meal-data">{checkoutInfo?.firstName + " " + (checkoutInfo?.lastName ? checkoutInfo?.lastName : '')}</span></div>
                <div className="mb-15"><span className="details-heading">Mobile Number: </span><span className="meal-data">{checkoutInfo?.mobileNo}</span></div>
                <div className="mb-15"><span className="details-heading">Email: </span><span className="meal-data">{checkoutInfo?.email}</span></div>
                <div className="mb-15"><span className="details-heading">Address: </span><span className="meal-data">{checkoutInfo?.address}</span></div>
                <div className="mb-15"><span className="details-heading">State: </span><span className="meal-data">{checkoutInfo?.state}</span></div>
                <div className="mb-15"><span className="details-heading">City: </span><span className="meal-data">{checkoutInfo?.city}</span></div>
                <div className="mb-15"><span className="details-heading">Country: </span><span className="meal-data">{checkoutInfo?.country}</span></div>
            </div>
        </div>
        
    )
}

export default OrderDetails;