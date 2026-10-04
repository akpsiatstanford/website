import OffCycle from "./OffCycle";
import OnCycle from "./OnCycle";
import { rush } from "./rush";

export default function RushPage() {
  return (
    <main>
      <h1>Rush</h1>

      {rush.open ? <OnCycle /> : <OffCycle />}
    </main>
  );
}
