export class URLConfig {
    
    public getMSSPPersonalInfoSaveServiceURL() : string {
        return "/save_personal_info"; //"http://13.233.190.134:3000/api/personalInfo/add";//
    }

    public getMSSPPersonalInfoFetchServiceURL() : string {
        return "/fetch_personal_info"; //"http://13.233.190.134:3000/api/personalInfo";//
    }

    public getGenerateInvitationCodeServiceURL() : string {
        return "/generate_invitation_code"; //"http://13.233.190.134:3000/api/users/generateInvitationCode";//
    }

    public getValidateInvitationCodeServiceURL() : string {
        return "/validate_invitation_code"; //"http://13.233.190.134:3000/api/users/validateInvitationCode";//
    }
}