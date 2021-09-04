import React  from 'react';
//import DishDetail from './DishdetailComponent';
import { FadeTransform } from 'C:/Users/vivek/node_modules/react-animation-components';
  import { Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'C:/Users/vivek/node_modules/reactstrap';
import { Link } from 'C:/Users/vivek/node_modules/react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
    function RenderMenuItem ({dish}) {
        return (
            <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(-50%)'
            }}>
            <Card>
                <Link to={`/menu/${dish.id}`} >
                    <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
         </FadeTransform>
        );
    }
    

/*class Menu extends Component {

  constructor(props) {
      super(props);

      this.state = {
          selectedDish: null
      }
  }

  onDishSelect(dish) {
      this.setState({ selectedDish: dish});
  }

   renderDish(dish) {
    if (dish != null)
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    else
        return(
            <div></div>
        ); */
//}


const Menu = (props) => {
    const menu = props.dishes.dishes.map((dish) => {
        return (
          <div key={dish.id} className="col-12 col-md-5 m-1">
            <RenderMenuItem dish={dish} />
          </div>
          
        );  
    });
    if (props.dishes.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.dishes.errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{props.dishes.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else
      return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
           
                {menu}
            
            </div>   
        </div>
    );
}
    

     /* return (
          <div className="container">
              <div className="row">
                  {menu}
                  
              </div>
               <DishDetail dish ={this.state.selectedDish} />
               </div>
      );*/
  


export default Menu;