import AccordionSummary from "@mui/material/AccordionSummary";
import Accordion from "@mui/material/Accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import capitalize from "lodash/capitalize";
import moment from "moment/moment";

import styles from "./style.module.scss";

const OrderInfo = ({ createdAt, totalPrice, ordersList }) => {
  const data = moment(createdAt).format("LLL");
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <div className={styles.orderTitle}>
          <p>{data}</p>
          <p>
            Total order price: <span>{`$${totalPrice}`}</span>
          </p>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        {ordersList.map(({ id, name, image, quantity, price }) => (
          <div key={id} className={styles.orderInfo}>
            <img src={image} alt={name} />
            <p>{capitalize(name)}</p>
            <p>
              Quantity: <span>{quantity}</span>
            </p>
            <p>
              Price: <span>{`$${price * quantity}`}</span>
            </p>
          </div>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};
export default OrderInfo;
