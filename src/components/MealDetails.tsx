import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getMealDetails } from "../store/action";

const MealDetails = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { mealData } = useSelector((state:any) => state.ReducerState);
    const [ingredients, setIngredients] = useState<any>([]);

    useEffect(() => {
        getMealDetail();
    },[location.state.id]);

    useEffect(() => {
        if(mealData) {
            let filteredIngredients = Object.entries(mealData).filter(([key, value]) => key.includes("Ingredient") && mealData[key] != "")
            setIngredients(filteredIngredients.map(([key, value]: any) => value))
        }
    },[mealData])

    const getMealDetail = async() => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${location.state.id}`).then((result) => {return result.json()})
        dispatch(getMealDetails(res.meals[0]));
    }

    return(
        <div className="meal-details-container">
            <div className="meal-banner">
                <img className="meal-img" src={mealData?.strMealThumb} alt="" />
                <div className="meal-name">{mealData?.strMeal}</div>
            </div>
            <div>
                <div className="flex-centering">
                    <div><span className="meal-heading">Area: </span><span className="meal-data">{mealData?.strArea}</span></div>
                    <div><span className="meal-heading" style={{marginLeft: "40px"}}>Category: </span><span className="meal-data">{mealData?.strCategory}</span></div>
                </div>
                <div className="ingredients" style={{marginTop: '30px'}}>
                    <Row gutter={15} style={{width: "100%", alignItems: 'baseline'}}>
                        <Col span={4}><div className="meal-heading space-between">Ingredients<div>:</div></div></Col>
                        <Col span={20} className="ingredients">{ingredients.join(",  ")}</Col>
                    </Row>
                </div>
                <div className="ingredients" style={{marginTop: '30px'}}>
                    <Row gutter={15} style={{width: "100%", alignItems: 'baseline'}}>
                        <Col span={4}className="meal-heading space-between">Instructions <div>:</div></Col>
                        <Col span={20} className="ingredients">{mealData?.strInstructions}</Col>
                    </Row>
                </div>
                <div className="flex-centering">
                    <button className="check-out-btn" style={{padding: "8px 20px"}} onClick={() => navigate('/checkout')}>Checkout</button>
                </div>
            </div>
            
        </div>
    )
}

export default MealDetails;