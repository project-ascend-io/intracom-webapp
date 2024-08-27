import React from 'react';

interface FeedbackFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onSubmit, isLoading }) => (
  <form onSubmit={onSubmit}>
    <div className='my-2'>
      <label className='flex items-center'>
        <input
          type='radio'
          name='reason'
          value='organization'
          className='radio mx-3'
        />
        <span>I don&apos;t know the organization.</span>
      </label>
    </div>
    <div className='my-2'>
      <label className='flex items-center'>
        <input
          type='radio'
          name='reason'
          value='interest'
          className='radio mx-3'
        />
        <span>I&apos;m not interested in joining Intracom.</span>
      </label>
    </div>
    <div className='my-2'>
      <label className='flex items-center'>
        <input
          type='radio'
          name='reason'
          value='other'
          className='radio mx-3'
        />
        <span>Other</span>
      </label>
    </div>
    <div className='my-4'>
      <button
        type='submit'
        className='btn btn-error rounded-lg text-white'
        disabled={isLoading}
      >
        Deny Invitation
      </button>
    </div>
  </form>
);

export default FeedbackForm;
