import Delivery from "./Delivery/Delivery";
import Dishes from "./Dishes/Dishes";
import Feedback from "./Feedback/Feedback";
import Header from "./Header/Header";
import Order from "./Order/Order";
import Subscribe from "./Subscribe/Subscribe";

export default function Home(){
    return(
        <div>
            <Delivery></Delivery>
            <Dishes></Dishes>
            <Order></Order>
            <Feedback></Feedback>
            <Subscribe></Subscribe>
        </div>
    )
}