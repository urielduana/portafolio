import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Divider,
  ScrollShadow,
  Input,
  Textarea,
  Link,
} from "@nextui-org/react";
import {
  GitHub,
  Instagram,
  Linkedin,
  Mail,
  MessageSquare,
  Phone,
  User,
} from "react-feather";
import VadoseLogo from "./VadoseLogo";
import { ChangeEvent, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const sendEmail = () => {
    if (
      formData.fullName == "" ||
      formData.email == "" ||
      formData.message == ""
    ) {
      alert("Please fill all the fields");
    } else {
      emailjs.send(
        "service_b9rqt8v",
        "template_mb31kue",
        formData,
        "T50_SEajYNKfRVNM5"
      );
      onOpenChange();
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Button
        size="lg"
        className="bg-vadose-200 text-surface-100 font-medium text-sm"
        startContent={<MessageSquare size={24} color="white" />}
        onClick={onOpen}
      >
        Contact
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        size="5xl"
        placement="center"
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <Link href="/" onClick={onClose}>
                  <VadoseLogo />
                </Link>
              </ModalHeader>
              <ModalBody>
                <ScrollShadow>
                  <div className="flex flex-wrap flex-col sm:flex-row gap-2 justify-between">
                    <div className="sm:w-1/3 w-full flex flex-col justify-between ">
                      {/* Text */}
                      <div>
                        <h2 className="text-4xl sm:text-5xl font-bold my-5">
                          Let's Talk
                        </h2>
                        <p className="font-light sm:text-lg text-surface-300 my-5">
                          If you have any questions or would like to discuss a
                          project, please get in touch.
                        </p>
                      </div>
                      {/* Buttons */}
                      {/* Buttons */}
                      <div className="flex gap-4 flex-wrap">
                        <Link
                          href="https://www.linkedin.com/in/urielduana/"
                          isExternal
                        >
                          <Button
                            isIconOnly
                            variant="faded"
                            aria-label="Take a photo"
                            className="bg-vadose-100  border-0"
                          >
                            <Linkedin size={32} color="white" />
                          </Button>
                        </Link>
                        <Link href="https://github.com/urielduana" isExternal>
                          <Button
                            isIconOnly
                            variant="faded"
                            aria-label="Take a photo"
                            className="bg-vadose-100  border-0"
                          >
                            <GitHub size={32} color="white" />
                          </Button>
                        </Link>
                        <Link
                          href="https://www.instagram.com/uduana25/"
                          isExternal
                        >
                          <Button
                            isIconOnly
                            variant="faded"
                            aria-label="Take a photo"
                            className="bg-vadose-100  border-0"
                          >
                            <Instagram size={32} color="white" />
                          </Button>
                        </Link>
                        <Link
                          href="https://api.whatsapp.com/send?phone=5214424795960&text=Hi!!!👋👋%0AI%20saw%20your%20website%20and%20I%20want%20to%20contact%20to..."
                          isExternal
                        >
                          <Button
                            isIconOnly
                            variant="faded"
                            aria-label="Take a photo"
                            className="bg-vadose-100  border-0"
                          >
                            <Phone size={32} color="white" />
                          </Button>
                        </Link>
                      </div>
                      {/* Personal info */}
                      <div className="">
                        {/* Phone */}
                        <div className="flex gap-4 my-2">
                          <Phone />
                          <Link
                            href="tel:+524424795960"
                            className="text-vadose-200"
                          >
                            +52 442 479 5960
                          </Link>
                        </div>

                        {/* Email */}
                        <div className="flex gap-4 my-2">
                          <Mail />
                          <Link
                            href="mailto:uriel.duanachavez@hotmail.com"
                            className="text-vadose-200"
                          >
                            uriel.duanachavez@hotmail.com
                          </Link>
                        </div>
                      </div>
                    </div>
                    <Divider
                      className="h-auto sm:block hidden"
                      orientation="vertical"
                    />
                    <Divider
                      className="w-auto sm:hidden block my-5"
                      orientation="horizontal"
                    />
                    <div className="sm:w-1/2 w-full">
                      <h2 className="text-xl sm:text-3xl font-bold my-5">
                        Send me a Message :)
                      </h2>
                      <form className="px-9" onSubmit={sendEmail}>
                        <Input
                          required
                          endContent={<User />}
                          label="Full Name"
                          placeholder="Enter your full name"
                          type="text"
                          variant="bordered"
                          className="my-2"
                          name="fullName"
                          onChange={handleInputChange}
                        />
                        <Input
                          required
                          autoFocus
                          endContent={<Mail />}
                          label="Email"
                          placeholder="Enter your email"
                          variant="bordered"
                          className="my-2"
                          type="email"
                          name="email"
                          onChange={handleInputChange}
                        />
                        <Textarea
                          required
                          autoFocus
                          label="Message"
                          placeholder="Enter your message"
                          variant="bordered"
                          className="my-2"
                          name="message"
                          onChange={handleInputChange}
                        />
                      </form>
                    </div>
                  </div>
                </ScrollShadow>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  className="bg-vadose-200 text-surface-100"
                  onPress={sendEmail}
                >
                  Send Message
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
