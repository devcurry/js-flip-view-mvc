/// <reference path="_references.js" />

function viewModel()
{
    var _this = this;
    this.currentImageIndex = ko.observable(-1);
    this.allImages = ko.observableArray();
    this.auto = ko.observable(false);
    this.start = ko.computed({
        read: function (timeout)
        {
            if (_this.auto() === true)
            {
                setTimeout(_this.next, timeout);
            }
        },
        write: function (timeout)
        {
            if (_this.auto() === true)
            {
                setTimeout(_this.next, timeout);
            }
        }
    });
    this.selectedImage = ko.computed(function ()
        {
            if (_this.allImages)
            {

                return _this.allImages()[_this.currentImageIndex()];
            }
        });
    this.next = function ()
    {
        $("#displayImage").fadeOut(500, function ()
        {
            if (_this.currentImageIndex() < _this.allImages().length - 1)
            {
                _this.currentImageIndex(_this.currentImageIndex() + 1);
            }
            else
            {
                _this.currentImageIndex(0);
            }
            $("#displayImage").fadeIn();
            _this.start(2000);
        });
    }
    this.previous = function ()
    {
        $("#displayImage").fadeOut(500, function ()
        {
            if (_this.currentImageIndex() > 0)
            {
                _this.currentImageIndex(_this.currentImageIndex() - 1);
            }
            else
            {
                _this.currentImageIndex(_this.allImages().length - 1);
            }
            $("#displayImage").fadeIn();
        });
    }
}

$(document).ready(function (data)
{
    var vm = new viewModel();
    $.ajax({
        url: "/api/Images/",
        type:"GET"
    }).done(function (data)
    {
        for (i = 0; i < data.length; i++)
        {
            vm.allImages.push(data[i]);
        }
        ko.applyBindings(vm);
        vm.currentImageIndex(0);
    });
});