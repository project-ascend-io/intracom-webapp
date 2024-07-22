import DefaultLayout from "@/layouts/default"

export default function UserInvitePage() {
  return (
   <>
     <p>User Invite Page</p>
   </>
  )
}

UserInvitePage.getLayout = function getLayout(page) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}
