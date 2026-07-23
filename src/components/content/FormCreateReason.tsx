import { Button } from '@/components/ui/button'
import { FaBriefcase, FaCircleUser, FaFaceLaugh, FaGraduationCap, FaHouse, FaRobot, FaUsers, FaWandMagicSparkles } from 'react-icons/fa6'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useForm } from '@tanstack/react-form'
import { toast } from 'sonner'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { generateReasonSchema, type GenerateReasonPayload } from '@/schema/reason.schema'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useCreateReason } from '@/hooks/useCreateReason'
import { HttpStatusCode } from 'axios'

interface FormCreateReasonProps {
  onSuccess: (reason: string) => void
}

const items = [
  { label: 'Kerja', value: 'work', icon: <FaBriefcase className="text-primary" /> },
  { label: 'Sekolah', value: 'school', icon: <FaGraduationCap className="text-primary" /> },
  { label: 'Nongkrong', value: 'hangOut', icon: <FaUsers className="text-primary" /> },
  { label: 'Acara Keluarga', value: 'familyEvent', icon: <FaHouse className="text-primary" /> },
]

export default function FormCreateReason({ onSuccess }: FormCreateReasonProps) {
  // state
  const { mutateAsync, isPending } = useCreateReason()

  // form
  const form = useForm({
    defaultValues: {
      myName: '',
      targetName: '',
      language: 'id',
      reason: 'work',
      style: 'normal',
    } as GenerateReasonPayload,
    validators: {
      onSubmit: generateReasonSchema,
    },
    onSubmit: async ({ value }) => {
      const result = await mutateAsync(value)

      if (result.status != HttpStatusCode.Created) {
        toast.error(result.message)
      } else {
        toast.success(result.message)
        onSuccess(result.data?.reason || '')
      }
    },
  })
  return (
    <Card className="shadow-xl">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Buat Alasanmu</CardTitle>
        <CardDescription>Pilih skenario, tentukan tingkat absurditas, biarkan Ngeles bekerja.</CardDescription>
      </CardHeader>

      <CardContent>
        <form
          id="generate-reason-form"
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <FieldGroup>
            <form.Field
              name="targetName"
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Nama Teman / Target (Opsional)</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="Kosongkan unguk alasan umum"
                      autoComplete="off"
                    />
                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </Field>
                )
              }}
            />
            <form.Field
              name="myName"
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Nama Anda (Opsional)</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="Kosongkan unguk alasan umum"
                      autoComplete="off"
                    />
                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </Field>
                )
              }}
            />
            <form.Field
              name="reason"
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                const selectedItem = items.find((item) => item.value === field.state.value)
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Alasan (Opsional)</FieldLabel>
                    <Select value={field.state.value} onValueChange={(val: any) => field.handleChange(val)}>
                      <SelectTrigger className="w-full" aria-invalid={isInvalid}>
                        {selectedItem ? (
                          <span className="flex items-center gap-2">
                            {selectedItem.icon && <span className="flex items-center justify-center size-4">{selectedItem.icon}</span>}
                            <span>{selectedItem.label}</span>
                          </span>
                        ) : (
                          <SelectValue placeholder="Pilih Alasan" />
                        )}
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {items.map((item) => (
                            <SelectItem key={item.value} value={item.value}>
                              {item.icon && <span className="flex items-center justify-center size-4">{item.icon}</span>}
                              <span>{item.label}</span>
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </Field>
                )
              }}
            />
            <form.Field
              name="style"
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Tingkat Absurditas</FieldLabel>
                    <ToggleGroup variant={'outline'} size="lg" onValueChange={(val: any) => field.handleChange(val[0])}>
                      <ToggleGroupItem value="normal" aria-invalid={isInvalid}>
                        <FaCircleUser className="size-4 text-primary mr-1" /> Normal
                      </ToggleGroupItem>
                      <ToggleGroupItem value="stupid" aria-invalid={isInvalid}>
                        <FaFaceLaugh className="size-4 text-primary" /> Lucu
                      </ToggleGroupItem>
                      <ToggleGroupItem value="absurd" aria-invalid={isInvalid}>
                        <FaRobot className="size-4 text-primary mr-1" /> Absurd
                      </ToggleGroupItem>
                    </ToggleGroup>
                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </Field>
                )
              }}
            />
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter>
        <Button form="generate-reason-form" className={'w-full'} size={'lg'} type="submit" disabled={isPending}>
          {isPending ? 'Membuat alasan...' : 'Buat Alasan'}
        </Button>
      </CardFooter>
    </Card>
  )
}
