export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center px-4 h-[calc(100dvh-128px)] text-center">
      <h1 className="mb-4 text-5xl font-bold">404 - Page not found</h1>
      <p className="text-lg text-gray-600">Sorry, the page you’re looking for doesn’t exist or has been moved.</p>
    </div>
  );
}
