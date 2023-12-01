import {IconArrowLeft} from '~/assets/icons';
import Button from '~/components/ui/button/Button';

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <Button
        id=""
        className=""
        disabled={true}
        isLoading={false}
        type="button"
      >
        <IconArrowLeft />
        Shop Now
      </Button>
    </>
  );
}
