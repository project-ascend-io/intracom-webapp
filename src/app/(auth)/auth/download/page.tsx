export default function DownloadPage() {
  return (
    <>
      <div className='container mx-auto md:w-9/12'>
        <div className='grid grid-cols-1 gap-6 py-6 lg:grid-cols-5'>
          <div className='lg:col-span-4'>
            <h1 className='text-xl font-bold'>
              Congratulation, your account is all setup!
            </h1>
            <p>To get started, download the desktop app.</p>

            <div className='my-3 flex justify-between rounded-xl border-2 border-solid px-5 py-5'>
              <div>
                <p className='text-lg font-bold'>Download for Mac</p>
                <p className='text-secondary'>Requires macOS 10.14 or later</p>
              </div>
              <div>
                <button className='btn btn-primary rounded-xl p-3 text-white'>
                  Download
                </button>
              </div>
            </div>
            <div className='my-3 flex justify-between rounded-xl border-2 border-solid px-5 py-5'>
              <div>
                <p className='text-lg font-bold'>Download for Windows</p>
                <p className='text-secondary'>Requires Windows 10 or later</p>
              </div>
              <div>
                <button className='btn btn-primary rounded-xl p-3 text-white'>
                  Download
                </button>
              </div>
            </div>

            <p className='textarea-secondary mb-3 mt-6'>
              Already have the app?
            </p>
            <button className='btn btn-neutral w-72 rounded-xl p-3 text-white'>
              Open Intracom
            </button>
          </div>
          <div className='hidden lg:block'>
            <img
              className='rounded-xl'
              src='https://picsum.photos/200/600'
              alt='intracom-banner'
            />
          </div>
        </div>
      </div>
    </>
  );
}
