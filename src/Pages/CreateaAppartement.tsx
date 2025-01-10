import TitleDescriptionStep from "../Components/PropertyListing/Steps/TitleDescriptionStep";
import PhotosStep from "../Components/PropertyListing/Steps/PhotosStep";
import AmenitiesStep from "../Components/PropertyListing/Steps/AmenitiesStep";
import PricingStep from "../Components/PropertyListing/Steps/PrecingStep";
import LocationStep from "../Components/PropertyListing/Steps/LocationStep";
import { useState } from "react";
import PropertyTypeStep from "../Components/PropertyListing/Steps/PropertyTypeStep";


export default function CreateAppartement(){
    const [Title, setTitle] = useState(true)
    const [Property, setProperty] = useState(false)
    const [Precing, setPrecing] = useState(false)
    const [Photo, setPhoto] = useState(false)
    const [Location, setLocation] = useState(false)
    const [Amenities, setAmenities] = useState(false)

    if (Title) {
        return <TitleDescriptionStep onNext={function (): void {
            setProperty(true)
            setTitle(false)
        } } onBack={function (): void {
            return
        } } isFirstStep={true} isLastStep={false} />
    }
    if (Property) {
        return <PropertyTypeStep onNext={function (): void {
            setPrecing(true)
            setProperty(false)
        } } onBack={function (): void {
            setTitle(true)
        } } isFirstStep={false} isLastStep={false} />
    }
    if (Precing) {
        return <PricingStep onNext={function (): void {
            setPhoto(true)
            setPrecing(false)
        } } onBack={function (): void {
            setProperty(true)
        } } isFirstStep={false} isLastStep={false} />
    }
    if (Photo) {
        return <PhotosStep onNext={function (): void {
            setLocation(true)
            setPhoto(false)
        } } onBack={function (): void {
            setPrecing(true)
        } } isFirstStep={false} isLastStep={false} />
    }
    if (Location) {
        return <LocationStep onNext={function (): void {
            setAmenities(true)
            setLocation(true)
        } } onBack={function (): void {
            setPhoto(true)
        } } isFirstStep={false} isLastStep={false} />
    }
    if (Amenities) {
        return <AmenitiesStep onNext={function (): void {
        } } onBack={function (): void {
            setLocation(true)
        } } isFirstStep={false} isLastStep={true} />
    }
}