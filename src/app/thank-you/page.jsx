import Link from 'next/link';
import ReturnHomeIcon from '@/components/icons/ReturnHomeIcon';

export default function ThankYouPage() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center px-4 h-[calc(100dvh-128px)] text-center">
      <h1 className="text-5xl font-bold">Thank you</h1>
      <p className="text-lg text-gray-600">We've received your message and will reply shortly.</p>
      <Link href={"/"}>
        <div className="flex gap-2 px-4 py-2 border border-gray-900 rounded-4xl">
          <ReturnHomeIcon /> Go to homepage
        </div>
      </Link>
    </div>
  );
}
