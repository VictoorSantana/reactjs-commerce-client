


module.exports = {
    Filter: (event) => {
        var result = event.target.value;
        return result;
    },

    FilterPhone: (event) => {
        var result = event.target.value;
        event.target.maxLength = 16
        result = result.replace(/\D/g, "")
        result = result.replace(/^(\d\d)(\d)/g, "($1) $2")
        result = result.replace(/(\d{1})(\d{4})(\d{4})/, "$1 $2-$3")
        return result;
        //return '';
    },

    FilterNumber: (event) => {
        var result = event.target.value;
        event.target.maxLength = 16
        result = result.replace(/\D/g, "");
        return isNaN(Number(result)) ? 0 : Number(result);
    },

    FilterDecimal: (event) => {        
        var result = event.target.value;
        event.target.maxLength = 16
        result = result.replace(/[^0-9.]|\.(?=.*\.)/g, "");
        return result;
    },

    FilterLetters: (event) => {
        var result = event.target.value;
        result = result.replace(/[^a-zA-Z záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ_]/g, '');
        return result;
    },
};