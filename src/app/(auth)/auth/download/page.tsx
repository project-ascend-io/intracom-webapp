import Image from 'next/image';

export default function DownloadPage() {
  return (
    <>
      <div className="container mx-auto md:w-9/12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 py-6">
          <div className="lg:col-span-4">
            <h1 className="text-xl font-bold">
              Congratulation, you&apos;re account is all setup!
            </h1>
            <p>To get started, download the desktop app.</p>

            <div className="flex justify-between rounded-xl border-2 border-solid py-5 px-5 my-3">
              <div>
                <p className="text-lg font-bold">Download for Mac</p>
                <p className="text-secondary">Requires macOS 10.14 or later</p>
              </div>
              <div>
                <button className="btn btn-primary rounded-xl text-white p-3">
                  Download
                </button>
              </div>
            </div>
            <div className="flex justify-between rounded-xl border-2 border-solid py-5 px-5 my-3">
              <div>
                <p className="text-lg font-bold">Download for Windows</p>
                <p className="text-secondary">Requires Windows 10 or later</p>
              </div>
              <div>
                <button className="btn btn-primary rounded-xl text-white p-3">
                  Download
                </button>
              </div>
            </div>

            <p className="textarea-secondary mt-6 mb-3">
              Already have the app?
            </p>
            <button className="btn btn-neutral rounded-xl text-white p-3 w-72">
              Open Intracom
            </button>
          </div>
          <div className="hidden lg:block">
            <Image
              className="rounded-xl"
              src="https://picsum.photos/200/600"
              alt="intracom-banner"
            />
          </div>
        </div>
      </div>
    </>
  );
}
