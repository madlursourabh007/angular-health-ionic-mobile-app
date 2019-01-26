export class URLConfig {
    
    public getMSSPPersonalInfoSaveServiceURL() : string {
        return  "http://13.233.190.134:3000/api/personalInfo/add";//"/save_personal_info"; //
    }

    public getMSSPPersonalInfoFetchServiceURL() : string {
        return "http://13.233.190.134:3000/api/personalInfo";//"/fetch_personal_info"; //
    }

    public getMSSPPersonalInfoUpdateServiceURL() : string {
        return "http://13.233.190.134:3000/api/personalInfo";//"/fetch_personal_info"; //
    }

    public getMSSPEducationalInfoSaveServiceURL() : string {
        return  "http://13.233.190.134:3000/api/education/add";//"save_educational_info"
    }

    public getMSSPEducationalInfoFetchServiceURL() : string {
        return  "http://13.233.190.134:3000/api/education/";//"save_educational_info"
    }

    public getMSSPEducationalInfoUpdateServiceURL() : string {
        return  "http://13.233.190.134:3000/api/education/";//"save_educational_info"
    }

    public getMSSPFinancialInfoSaveServiceURL() : string {
        return  "http://13.233.190.134:3000/api/finance/add";//"save_financial_info"
    }
    //msp_finance
    public getMSPFinancialInfoSaveServiceURL() : string {
        return  "http://13.233.190.134:3000/api/msp_finance/add";//"save_financial_info"
    }
    public getMSSPFinancialInfoFetchServiceURL() : string {
        return  "http://13.233.190.134:3000/api/finance/";
    }

    public getMSPFinancialInfoFetchServiceURL() : string {
        return  "http://13.233.190.134:3000/api/msp_finance/";
    }

    public getGenerateInvitationCodeServiceURL() : string {
        return "http://13.233.190.134:3000/api/users/generateInvitationCode";//"/generate_invitation_code"; //
    }

    public getValidateInvitationCodeServiceURL() : string {
        return "http://13.233.190.134:3000/api/users/validateInvitationCode";//"/validate_invitation_code"; //
    }
}