$(document).ready(function (event) {
    CheckDetails.CheckDetailsBind();
});

var CheckDetails = {
    CheckDetailsBind: function () {

        $("#btnChkDetails").click(function (event) {

            var phoneNo = $("#txtPhoneNo").val();
            var company = $("#txtCompany").val();
            if(CheckDetails.CheckDetailsValidate(phoneNo, company)==true)
            {
                window.location="home.html"; 
            }
        });
    },
    CheckDetailsValidate: function (phoneNo, company) {
        var valid = true;
        var phoneNo = $("#txtPhoneNo").val();
        var company = $("#txtCompany").val();
        if (phoneNo == null || phoneNo == "") {
            $("#spnPhoneNoErr").text("* Enter Telephone No");
            valid = false;
        }
        else if (CheckDetails.phoneValidator(phoneNo)) {
            $("#spnPhoneNoErr").text("Phone no should contain 10 numbers");
            valid = false;
        }
        else if (CheckDetails.phonevalidate(phoneNo)) {
            $("#spnPhoneNoErr").text("Invalid cell number");
            valid = false;
        }
        else {
            $("#spnPhoneNoErr").text("");
        }
        if (company == null || company == "") {
            $("#spnCompanyErr").text("* Enter Password");
            valid = false;
        }
        else if (CheckDetails.nameValidator(company)) {
            $("#spnCompanyErr").text("Enter only char");
            valid = false;
        }
        else if (CheckDetails.nameValidate(company)) {
            $("#spnCompanyErr").text("Invalid Password");
            valid = false;
        }
        else {
            $("#spnCompanyErr").text("");
        }

        if (valid == true) {
            $("spnPhoneNoErr").text("");
            $("#spnCompanyErr").text("");
        }

        return valid;
    },

    phoneValidator: function (phoneNo) {
        var phoneExp = "^([0-9]{10})$";

        if (!(phoneNo.match(phoneExp))) {
            return true;
        } 
        else {
            return false;
        }

    },
    phonevalidate: function (phoneNo) {
       if (phoneNo != "1234567890") {

            return true;
        }
        else {
            return false;
        }

    },
    nameValidator: function (company) {
        var nameExp = "^([a-z_A-Z ]+)$";

        if (!(company.match(nameExp))) {
            return true;
        } 
        else {
            return false;
        }
    },
    nameValidate: function (company) {

         if (company != "stark") {

            return true;
        }
        else {
            return false;
        }
    },
}

