import Link from 'next/link';
import ReturnHomeIcon from '@/components/icons/ReturnHomeIcon';

export default function NotFound() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center px-4 h-[calc(100dvh-128px)] text-center">
      <h1 className="text-5xl font-bold">404 - Page not found</h1>
      <p className="text-lg text-gray-600">Sorry, the page you’re looking for doesn’t exist or has been moved.</p>
      <Link href={"/"}>
        <div className="flex gap-2 px-4 py-2 border border-gray-900 rounded-4xl">
          <ReturnHomeIcon /> Go to homepage
        </div>
      </Link>
    </div>
  );
}
