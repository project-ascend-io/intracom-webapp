
const ContributeModal = () => {
  return (
    <>
      <dialog id="contribute-modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mt-2 mb-4">Contribute to Intracom</h3>
          <p className="py-4">We’re thrilled to have you contribute to Intracom and help shape the platform’s future!
            <br />
            <br />
            Whether you’re a developer, designer, or content creator, your skills can make a meaningful impact. You can contribute by improving the platform’s code, enhancing the user experience, creating helpful content, or sharing feedback to make Intracom even better.
            <br />
            <br />
            Getting started is easy! Simply reach out to us for guidance and access to our contributor resources.
            <br />
            Email us at <a className="text-blue-600" href="mailto:oscar@projectascend.io">oscar@projectascend.io</a> to begin your journey and make your mark on Intracom.
          </p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  )
}

export const openContributeModal = () => {
  document.getElementById('contribute-modal').showModal();
}

export default ContributeModal;
