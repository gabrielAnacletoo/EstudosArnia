//create user 
interface UserData{
	name: string
	email: string
	password: string
    createdAt: NativeDate
    updatedAt: NativeDate
    appointment: Object;
}
export {UserData}