#Depending on the operating system of the host machines(s) that will build or run the containers, the image specified in the FROM statement may need to be changed.
#For more information, please see https://aka.ms/containercompat

FROM mcr.microsoft.com/dotnet/core/aspnet:3.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.0 AS build
WORKDIR /src
COPY ["Razor.SweetAlert2.Guide.Server/Razor.SweetAlert2.Guide.Server.csproj", "Razor.SweetAlert2.Guide.Server/"]
COPY ["Razor.SweetAlert2.Guide.Client/Razor.SweetAlert2.Guide.Client.csproj", "Razor.SweetAlert2.Guide.Client/"]
RUN dotnet restore "Razor.SweetAlert2.Guide.Server/Razor.SweetAlert2.Guide.Server.csproj"
COPY . .
WORKDIR "/src/Razor.SweetAlert2.Guide.Server"
RUN dotnet build "Razor.SweetAlert2.Guide.Server.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "Razor.SweetAlert2.Guide.Server.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "Razor.SweetAlert2.Guide.Server.dll"]