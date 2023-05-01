import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const nav = useNavigate();
  return (
    <Card color="transparent" shadow={false} className="max-w-md mx-auto mt-[7%]">
      <Typography variant="h4" color="blue-gray">
        Shipping Address
      </Typography>
      <Typography color="gray" className="my-2 font-normal">
        Enter your shipping details.
      </Typography>
      <form >
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Adress" />
          <Input size="lg" label="City" />
        </div>

        <Button onClick={() => nav('/user/placeorder')} className="mt-6" fullWidth>
          Submit
        </Button>

      </form>
    </Card>
  );
}


export default Shipping