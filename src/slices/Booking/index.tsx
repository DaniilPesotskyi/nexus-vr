import css from "./Booking.module.css";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type BookingProps = SliceComponentProps<Content.BookingSlice>;

import Section from "@/components/Section/Section";
import Heading from "@/components/Heading/Heading";
import Calendar from "@/components/Calendar/Calendar";

const Booking = ({ slice }: BookingProps): JSX.Element => {
  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading
        subtitle={slice.primary.subtitle}
        title={slice.primary.title}
        style="reverse"
      />
      <div>
        <Calendar />
      </div>
    </Section>
  );
};

export default Booking;
