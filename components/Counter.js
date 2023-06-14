import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import { useCountdown } from "@/hooks/useCountdown";
import { SMS_VERIFICATION_RESET_TIMER } from "@/contants/authentication";

const ShowCounter = ({ minutes, seconds }) => {
  return (
    <div className="text-center p-0">
      <Typography className="inline" color="disabled.dark">
        {minutes} :
      </Typography>
      <Typography className="inline" color="disabled.dark">
        {seconds}
      </Typography>
    </div>
  );
};

const Resend = ({ setCountDown }) => {
  return (
    <div className="text-center">
      <Link
        href="#"
        underline="none"
        color="secondary"
        onClick={() => {
          setCountDown(SMS_VERIFICATION_RESET_TIMER);
        }}
      >
        Resend Code
      </Link>
    </div>
  );
};

const CountdownTimer = () => {
  const { minutes, seconds, setCountDown } = useCountdown(
    SMS_VERIFICATION_RESET_TIMER
  );

  if (minutes + seconds <= 0) {
    return <Resend setCountDown={setCountDown} />;
  } else {
    return <ShowCounter minutes={minutes} seconds={seconds} />;
  }
};

export default CountdownTimer;
