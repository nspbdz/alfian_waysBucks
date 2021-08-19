import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import { Row, Col } from "react-bootstrap";

import data from "../data/fakeData";
import NotFound from "./NotFound";

import CardList from "../components/CardList";
import { CartContext } from "../contexts/cartContext";

const DetailProduct = ({ match }) => {
  const {state, dispatch} = useContext(CartContext);
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();


  const addProduct = (item) => {
    dispatch({
      type: "ADD_PRODUCT",
      data: item
    }) 
  }
  // execute after rendering jsx
  useEffect(() => {
    console.log("mounting component at:\n", new Date().toLocaleTimeString());
    setTimeout(() => {
      const itemMatchId = data.find((item) => item.id === parseInt(params.id));
      if (!itemMatchId) {
        setItem({
          status: "error",
          message: "item does not exist",
          data: null,
        });
        return setLoading(false);
      }
      setItem({
        status: "ok",
        message: "resource has been get successfully",
        data: itemMatchId,
      });
      setLoading(false);
    }, 5000);

    return () => {
      setItem(null)
      setLoading(true);
    }
  }, []);
  console.log(item)
  return (
    <>
      {loading && <p>loading....</p>}
      {(!loading && item.data) && (
        <>
          <Row>
            <Col xs={6}>
              <img
                src={item.data.image}
                alt="product"
                className="shadow-sm img-fluid rounded"
              />
            </Col>
            <Col>
              <div className="d-flex flex-column justify-content-space-beetwen">
                <div>
                  <p className="h1 font-weight-bold">{item.data.product}</p>
                </div>
                <div>
                  <p>Location: </p>
                  <p>{item.data.location}</p>
                </div>
                <div>
                  <p>Description: </p>
                  <p>{item.data.description}</p>
                </div>
              </div>
            </Col>
          </Row> 
          <hr />
        </>
      )}
      {(!loading && !item) && (<NotFound />)}
    </>
  );
};

export default DetailProduct;
