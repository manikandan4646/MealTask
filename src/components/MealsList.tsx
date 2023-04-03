import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMealsList } from '../store/action';
import { Card, Col, Row } from 'antd';


const MealsList = () => {

    const dispatch = useDispatch();
    const { mealsData } = useSelector((state:any) => state.ReducerState);
    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();
    const { Meta } = Card;

    useEffect(() => {
        setSearchText('')
        getData();
    },[searchText]);
    
    const getData = async () => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`).then((result) => {return result.json()})
        const data = res.meals.splice(0,10);
        dispatch(getMealsList(data));
    }

    return(
        <div className='centering meals-list-container'>
            <Row gutter={[24, 24]}>
            {
                (mealsData || []).map((meal: any, index: any) => (
                    <Col span={6} key={index}>
                        <div className='centering' onClick={() => navigate("/meal-details",{state:{id : meal?.idMeal}})}>
                            <Card
                                hoverable
                                style={{ width: 300, boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}
                                cover={<div><img className='card-img' alt="" src={meal?.strMealThumb} /></div>}
                            >
                                <Meta title={meal?.strMeal} description="www.instagram.com" />
                            </Card>
                        </div>
                    </Col>
                ))
            }
            </Row>
        </div>
    )

}

export default MealsList;