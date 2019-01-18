import { Component } from '@angular/core';
import { IonicPage, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileChooser } from '@ionic-native/file-chooser';
import { MSSPFinancialInfoSaveModal } from '../../../../app/common/modal/mssp/mssp-financial-info-save-modal/mssp-financial-info-save.modal';
import { LoadingProgress } from '../../../../app/common/loading/loading';
import { AppPreferences } from '@ionic-native/app-preferences';
import { MSSPFinancialInfoSaveService } from '../../../../service/mssp/financial-info-service/financial-info-save-service/financial-info-save.service'
import { FinancialInfoFetchService } from '../../../../service/mssp/financial-info-service/financial-info-fetch-service/financial-info-fetch.service'
import { MSSPFinancialExistingInfoSaveService } from '../../../../service/mssp/financial-info-service/financial-info-save-exsisting-service/financial-info-save-existing.service'

@IonicPage()
@Component({
    selector : 'financial-information',
    templateUrl : './financial-information.html',
    styleUrls : ['./financial-information.scss']
})
export class FinancialInformation{
    financialFormGroup : FormGroup;
    isDocumantUploaded : boolean = false;

    constructor(private _formBuilder : FormBuilder, 
        private _fileChooser : FileChooser, 
        private alertController : AlertController,
        private financialInfoSaveService : MSSPFinancialInfoSaveService,
        private financialInfoSaveModal : MSSPFinancialInfoSaveModal,
        private loadingProgress : LoadingProgress,
        private appPref : AppPreferences,
        private financialInfoFetchservice : FinancialInfoFetchService,
        private saveExistingFinancoInfo : MSSPFinancialExistingInfoSaveService){
        this.financialFormGroup = this._formBuilder.group({
            depositAmount : ['',Validators.required],
            depositDate : ['',Validators.required],
            depositRecieptNumber : ['',Validators.required]
        })
    }

    ionViewDidLoad() : void {
        this.appPref.fetch('financialInfo').then((data)=>{
            if(data == "" || data == undefined){}
            else{
                this.loadingProgress.generateLoadingProgress("Fetching existing financial information. Please wait..");
                this.loadingProgress.showLoading();
                this.financialInfoFetchservice.fetchFinancialInfo(data).subscribe((dataResult)=>{
                    console.log("Financial info fetch result ::: ");
                    console.log(dataResult);
                    this.financialInfoSaveModal.setDepositAmount(dataResult[0].depositAmount);
                    this.financialInfoSaveModal.setDepositDate(dataResult[0].depositDate.split("T")[0]);
                    this.financialInfoSaveModal.setDepositReceiptNumber(dataResult[0].depositReceiptNumber);
                    this.financialInfoSaveModal.setRecieptDocLink(dataResult[0].receiptDocLink);
                    this.loadExsitingFinanceInfo();
                    this.loadingProgress.dismissLoading();
                },(err)=>{
                    alert(err);
                    this.loadingProgress.dismissLoading();
                })
            }

        })
    }

    loadExsitingFinanceInfo() : void {
        this.financialFormGroup.get('depositAmount').setValue(this.financialInfoSaveModal.getDepositAmount());
        this.financialFormGroup.get('depositDate').setValue(this.financialInfoSaveModal.getDepositDate());
        this.financialFormGroup.get('depositRecieptNumber').setValue(this.financialInfoSaveModal.getDepositReceiptNumber());
    }

    uploadDocument() : void {
        this._fileChooser.open().then((uri)=>{
            if(uri.length < 1)
            this.isDocumantUploaded = false;
            else
            this.isDocumantUploaded = true;
        }).catch((err)=>{
            this.alertController.create({
                title : 'Error occurred',
                subTitle : err,
                buttons : ['Ok']
            })
        })
    }

    saveFinancialInformation() : void {
        this.appPref.fetch('financialInfo').then(appPrefData=>
            {
                this.loadingProgress.generateLoadingProgress("Saving your finacial information. Please wait..");
                this.loadingProgress.showLoading();
                this.financialInfoSaveModal.setDepositAmount(this.financialFormGroup.get('depositAmount').value)
                this.financialInfoSaveModal.setDepositDate(this.financialFormGroup.get('depositDate').value)
                this.financialInfoSaveModal.setDepositReceiptNumber(this.financialFormGroup.get('depositRecieptNumber').value)
                this.financialInfoSaveModal.setRecieptDocLink("doc.pdf");
                if(appPrefData =="" || appPrefData == undefined){
                    this.financialInfoSaveService.saveFinancialInfo(this.financialInfoSaveModal)
                    .subscribe((result)=>{
                        this.loadingProgress.dismissLoading();
                        console.log("Financial save info :: ");
                        console.log(result);
                        this.appPref.store('financialInfo',result.financialInfo).then((res)=>{
                            console.log(res);
                        }).catch((exception)=>{
                            console.error("Error occurred while storing finance is in prefrence.")
                        });
                        alert("Your financial information saved successfully.");
                    },(err)=>{
                        this.loadingProgress.dismissLoading();
                        alert("Error occurred while saving fiancial information. "+err);
                    })
                }
                else{
            this.saveExistingFinancoInfo.saveFinancialInfo(this.financialInfoSaveModal,appPrefData).subscribe(result=>{
            this.loadingProgress.dismissLoading();
            alert("Your financial information saved successfully.");
            },error=>{
                this.loadingProgress.dismissLoading();
                alert(error);
                })
            }
        })
    }
}