import MemberDirectory from "./MemberDirectory";
import { getActives, getExec } from "./members";

export default function BrotherhoodPage() {
  return (
    <main>
      <h1>Brotherhood</h1>
      <MemberDirectory exec={getExec()} actives={getActives()} />
    </main>
  );
}
