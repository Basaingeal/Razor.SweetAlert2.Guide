#Depending on the operating system of the host machines(s) that will build or run the containers, the image specified in the FROM statement may need to be changed.
#For more information, please see https://aka.ms/containercompat

FROM mcr.microsoft.com/dotnet/core/aspnet:3.0
WORKDIR /app
COPY ./bin/Release/netcoreapp3.0/publish/ .
ENTRYPOINT ["dotnet", "Razor.SweetAlert2.Guide.Server.dll"]