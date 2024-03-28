import { useEffect, useState } from "react";
import Container from "../components/Container";
import OpportunityItem from "./OpportunityItem";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../components/spinner/Spinner";
import styles from "../styles";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Opportunities = () => {
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    const res = axios
      .get(`${BASE_URL}/opportunities`)
      .then((res) => {
        console.log(res.data.data);
        setOpportunities(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-row items-center w-full pt-20">
      <Container>
        {opportunities.length ? (
          opportunities.map((item) => (
            <OpportunityItem key={item._id} opportunity={item} />
          ))
        ) : (
          <Spinner color={"#00c2cd"} size={24} apiSpinner={styles.apiSpinner} />
        )}
      </Container>
    </div>
  );
};

export default Opportunities;
