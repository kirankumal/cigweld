import {ButtonType} from '~/components/ui/button/ButtonType';
import {cn} from '~/utils';

export default function Button({
  id,
  type,
  className,
  children,
  disabled,
  isLoading,
  variant,
  size,
}: ButtonType) {
  return (
    <button
      id={id}
      type={type}
      className={cn(
        'text-neutral-white px-8 py-4 bg-primary-500 hover:bg-primary-600 cursor-pointer duration-150 disabled:bg-grey-50 flex items-center justify-center gap-2',
        className,
      )}
    >
      {children}
    </button>
  );
}
